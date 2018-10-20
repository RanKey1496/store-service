import { preferenceUser } from '../repository/preferenceRepository';
import { injectable } from 'inversify';

export interface PreferenceService {
    findQualified(token: string): Promise<Array<any>>;
}

@injectable()
export class PreferenceServiceImp implements PreferenceService {

    public async findQualified(token: string): Promise<Array<any>> {
        return JSON.parse(await preferenceUser(token));
    }

}