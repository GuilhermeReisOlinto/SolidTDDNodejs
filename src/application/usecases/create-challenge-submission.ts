import { Submission } from "../../domain/entities/submission";
import { ChallengesRepository } from "../repositories/ChallengesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";



type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmission {
    constructor (
        private studentsRepository: StudentsRepository,
        private challengesRepository: ChallengesRepository,
    ) {};

    execute({ studentId, challengeId }: CreateChallengeSubmissionRequest){
        const student = this.studentsRepository.findById(studentId);
        const challenge = this.challengesRepository.findById(challengeId);
        if(!student){
            throw new Error('Student does not exist.')
        };

        if(!challenge){
            throw new Error('Student does not exist.')
        };

        const submission = Submission.create ({
            studentId,
            challengeId,
        });

        return submission;
    };
}