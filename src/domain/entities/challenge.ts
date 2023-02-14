import { Entity } from "../../core/domain/Entity";

type Challengeprops = {
    title: string;
    intructionsUrl: string;
};

export class Challenge extends Entity<Challengeprops>{
    private constructor (props: Challengeprops, id?: string){
        super(props, id);
    };

    static create(props: Challengeprops, id?: string){
        const challenge = new Challenge(props, id);

        return challenge;
    };
}