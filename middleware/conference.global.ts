import ConferenceRepository from "~/repos/ConferenceRepository";
import type ConferenceResource from "~/resources/ConferenceResource";

export default defineNuxtRouteMiddleware(async (to) => {
    const conferenceRepo = new ConferenceRepository();
    const conferenceState = useState<ConferenceResource | null>('conference', () => null);

    const {data: conference} = await conferenceRepo.show();
    conferenceState.value = conference.value?.data ?? null;
});