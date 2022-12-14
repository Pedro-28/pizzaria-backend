import { Repository } from "typeorm";
import { IRepository } from "../IRepository";

export default abstract class AbstractTypeormRepository<T>
  implements IRepository<T>
{
  protected _model: Repository<T>;

  constructor(model: Repository<T>) {
    this._model = model;
  }

  async findAll(value?: object): Promise<T[]> {
    return this._model.find(value);
  }

  async findOne(value: object | Array<any>): Promise<T | null> {
    return this._model.findOne({ where: value } as T);
  }

  async create(obj: T): Promise<T> {
    const createdObj = await this._model.create({ ...obj } as unknown as T);
    await this._model.save(createdObj);
    return createdObj;
  }

  async update(obj: T, bodyObj: T): Promise<T | null> {
    return this._model.save({
      ...obj,
      ...bodyObj,
    });
  }

  async delete(id: string): Promise<void> {
    await this._model.delete(id);
  }
}
