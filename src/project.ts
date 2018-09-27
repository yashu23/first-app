import { Entity } from './entity';
import { Story } from './story';

export class Project extends Entity {
    private _released: boolean;
    private _stories: Array<Story> = [];

    /**
     * Getter released
     * @return {boolean}
     */
	public get released(): boolean {
		return this._released;
	}

    /**
     * Setter released
     * @param {boolean} value
     */
	public set released(value: boolean) {
		this._released = value;
	}

    /**
     * Add story.
     * 
     * @param story - {@class Story } Story to be added
     */
    public addStory(story: Story) {
        this._stories.push(story);
    }    

    /**
     * Remove story.
     * 
     * @param story - Story to be removed
     */
    public removeStory(story: Story) {
        let index = this._stories.indexOf(story);

        if (index != -1) {
            this._stories.splice(index, 1);
        }
    }
}