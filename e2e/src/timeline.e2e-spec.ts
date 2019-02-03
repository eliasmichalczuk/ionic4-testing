import { Timeline } from './timeline.po';
import { element, by, browser } from 'protractor';

describe('timeline', () => {

    let timeline: Timeline;

    beforeEach(() => {
        timeline = new Timeline();
    });

    it('should load posts', () => {
        timeline.navigateTo();
        expect(element.all(by.className('test-post')).count()).toBeGreaterThanOrEqual(3);
    });

    it('should load a post', () => {
        timeline.navigateTo();
        timeline.viewPost();
        expect(timeline.isPostPresent()).toBeTruthy();
    });
});
