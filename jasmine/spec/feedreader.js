/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function() {

    /* RSS feed - first test suite.*/
    describe('RSS Feeds', function() {

        /* This tests the if the allFeeds variable is defined and not empty.*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test loop that lopps through each feed checks if the URL is defined correctly or not.*/
         it('must have a defined URL and URL is not empty.', function() {

            allFeeds.forEach(function (feed) {
                var Link = feed.url;
                expect(Link).toBeDefined();
                expect(Link).not.toBe(undefined);
                expect(Link).toContain('http');

            });
         });

         /* A test loop that loops through each feed to check if name is defined and not empty.*/
         it('must have a defined Name and Name is not empty.', function () {

            allFeeds.forEach(function (feed) {
                var contentName = feed.name;
                expect(contentName).not.toBe('');
                expect(contentName.length).toBeGreaterThan(0);
                expect(contentName).not.toBe(undefined);

            });
         });

    });
    /* RSS feed - first test suite ends.*/

    /* Menu Test - test suite for menu */
    describe('The menu', function() {

        /* A Test that checks if the menu element is by default hidden. */
        it('must be by default hidden', function() {

            var hideMenuItem = $('body').hasClass('menu-hidden');
            expect(hideMenuItem).toBe(true);
        });

        it('must change the visibility on click', function() {
            /* To check the item is visible on click. */
            var iconMenu = $('.menu-icon-link');

            /* To check the item is invisible on click */
            iconMenu.click();
            expect(document.body.classList.contains('menu-hidden')).toBeFalsy();

            iconMenu.click();
            expect(document.body.classList.contains('menu-hidden')).toBeTruthy();
        });

    });
    /* Menu Test - test suite for menu ends */

    /* Initial Entries Test Suite */

    describe('Initial Entries', function()  {

        /* loadFeed asynchronous shuffle */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* To check items in the feed is not empty */
        it('must contain atleast a single entry in the feed container', function (done) {
            var feedItem = ($('.feed .entry'));
            expect(feedItem.length).toBeGreaterThan(0);
            done();
        });
    });
    
    /* Initial Entries Test Suite Ends */

    /* New Feed Selection Test suite */

    describe('New Feed Selection', function () {

       /* To check old feeds url for entry-link class */
       var oldFeed;
       var newFeed;
       
       beforeEach(function (done) {
            oldFeed = $('.entry-link').attr('href');
            loadFeed(1, done);
       });

    /* Check if url of new feed is not matching with old feed's url */
       it('When new feed is loaded the content is changed.', function(done) {
            newFeed = $('entry-link').attr('href');
            expect(newFeed).not.toBe(oldFeed);
            done();
       });
    });

    /* New Feed Selection Test suite ends */    

}());
