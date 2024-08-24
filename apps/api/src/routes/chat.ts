import express from "express";
import { Ollama } from "ollama";
import { OLLAMA_HOST, OLLAMA_MODEL } from "../constants";

const router = express.Router();

type RequestBody = {
  message: string;
};

router.post("/chat", async (req, res) => {
  const body: RequestBody = req.body;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");

  const host = process.env.OLLAMA_HOST ?? OLLAMA_HOST ?? 'http://127.0.0.1:11434';
  const model = process.env.OLLAMA_MODEL ?? OLLAMA_MODEL ?? "llama3";
  const ollama = new Ollama({ host: host })
  
  const response = await ollama.chat({
    model: model,
    messages: [{ role: "user", content: body.message }],
    stream: true,
  });

  for await (const part of response) {
    res.write(part.message.content);
  }

  res.end();
});

export default router;
