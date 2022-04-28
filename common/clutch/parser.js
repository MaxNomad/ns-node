const axios = require('axios');
const playwright = require('playwright');
const cheerio = require('cheerio');

const useHeadless = false; 



const getHtmlPlaywright = async url => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    const html = await page.content();
    await browser.close();
    return html;
};

const getHtmlAxios = async url => {
    const { data } = await axios.get(url);
    return data;
};

const getHtml = async url => {
    return useHeadless ? await getHtmlPlaywright(url) : await getHtmlAxios(url);
};

const extractRevs = ($, url) =>
    $('.review_data--container')
        .map((_, rev) => {
            const $rev = $(rev);
            return {
                prj_id: $rev.find('.inner_url').attr('href'),
                prj_name: $rev.find('h2 a').text(),
                rev_link: (url + $rev.find('.inner_url').attr('href')),
                prj_category: $rev.find('.field-name-project-type > span').text(),
                prj_size: $rev.find('.field-name-cost .field-item').first().text(),
                prj_length: $rev.find('.field-name-project-length > .field-item').first().text(),
                prj_summarry: $rev.find('.field-name-proj-description p').text(),
                review_date: $rev.find('.review-col-reviewtxt > .date').text(),
                the_review: $rev.find('.field-name-client-quote > .field-item > p').first().text().trim(),
                rating: parseFloat($rev.find('.rating-reviews > span').text()),
                quality: parseFloat($rev.find('.group-feedback > .field-name-quality > .field-item').text()),
                schedule: parseFloat($rev.find('.group-feedback > .field-name-schedule > .field-item').text()),
                cost: parseFloat($rev.find('.group-feedback > .field-name-cost-feedback > .field-item').text()),
                willing_to_refer: parseFloat($rev.find('.group-feedback > .field-name-willingness-refer > .field-item').text()),
                feedback_summary: $rev.find('.field-name-comments > .field-item > p').text(),
                reviewer: ($rev.find('.field-name-full-name-display .field-item').first().text()) || "The Reviewer",
                reviewer_work: $rev.find('.group-reviewer > .field-name-title').text().trim(),
                interview_industry: $rev.find('.field-name-user-industry > span').text(),
                interview_client_size: $rev.find('.field-name-company-size > span').text(),
                interview_location: $rev.find('.field-name-location > span').text(),
                interview_type: $rev.find('.field-name-review-type .clutch-pp-tip-text > span').text().trim(),
                interview_verified: $rev.find('.field-name-verified > .field-item').first().text()
            };
        })
        .toArray();


const extractRate = ($) => {
    const $data = $('.field-name-total-reviews');
    return {
        tolal_rate: parseFloat($data.find('span').text().trim())
    };
};

exports.Clutch = async (url) => {
    const allRevs = [];
    const html = await getHtml((url + "#reviews"));
    const $ = cheerio.load(html);
    const content = extractRevs($, url);
    const data = extractRate($);
    allRevs.push(...content);
    return {list: allRevs, tolal_rate: data.tolal_rate};
};



