import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if (!user_id) {
      response.status(404).json({ error: "mensagem do erro" });
    }
    try {
      const users = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error: "mensagem do erro" });
    }
  }
}

export { ListAllUsersController };
