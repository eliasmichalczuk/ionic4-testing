import { Timeline } from './timeline.po';
import { element, by } from 'protractor';

describe('timeline', () => {

    let timeline: Timeline;

    beforeEach(() => {
        timeline = new Timeline();
    });

    it('should load posts', () => {
        timeline.navigateTo();
        expect(element.all(by.className('test-post')).count()).toBeGreaterThanOrEqual(3);
    });
});
