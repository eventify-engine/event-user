import type ConferenceResource from "~/resources/ConferenceResource";
import type Resource from "~/types/Resource";
import Repository from "~/repos/Repository";

export default class ConferenceRepository extends Repository {
    public show() {
        return this.client.getData<Resource<ConferenceResource>>('conference', '/');
    }
}