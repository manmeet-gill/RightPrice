import scrapy
import re

from phoneItem import phoneItem


class PhoneScraper(scrapy.Spider):
    name = 'Phone Scraper'
    allowed_domains = ['craigslist.org']
    start_urls = ['https://sfbay.craigslist.org/d/cell-phones/search/moa',
                  'https://lasvegas.craigslist.org/search/moa',
                  'https://losangeles.craigslist.org/search/moa',
                  'https://sandiego.craigslist.org/search/moa',
                  'https://orangecounty.craigslist.org/search/moa',
                  'https://palmsprings.craigslist.org/search/moa']

    def parse(self, response):
        next_page_url = response.css(".button.next ::attr(href)")

        for item in self.scrape(response):
            yield item

        if next_page_url:
            path = next_page_url.extract_first()
            nextpage = response.urljoin(path)
            print("Found url: {}".format(nextpage))
            yield scrapy.Request(nextpage, callback=self.parse)

    def scrape(self, response):
        for resource in response.css(".result-info"):
            item = phoneItem()

            price = int(resource.css(".result-price ::text").extract_first().split('$')[1])
            item_page = resource.css("a ::attr(href)").extract_first()
            item_title = resource.css("a ::text").extract_first().lower()

            if price >= 11 and price <= 1100:
                if "headphon" in item_title or "case" in item_title or "repair" in item_title or "table" in item_title or "batery" in item_title or "watch" in item_title or "charg" in item_title or "tv" in item_title or "kindle" in item_title or "ipad" in item_title or "ipod" in item_title or "headset" in item_title:
                    pass
                else:
                    item['title'] = item_title
                    item['link'] = item_page
                    item['price'] = resource.css(".result-price ::text").extract_first()

                    request = scrapy.Request(item_page, callback=self.scrape_item)
                    request.meta['item'] = item
                    request.meta['item_title'] = item_title

                    yield request
            else:
                pass

    def scrape_item(self, response):
        item = response.meta['item']
        item_title = response.meta['item_title']

        item['brand'] = response.xpath('//span[text()="make / manufacturer: "]/b/text()').extract_first()
        item['model'] = response.xpath('//span[text()="model name / number: "]/b/text()').extract_first()
        item['mobOs'] = response.xpath('//span[text()="mobile OS: "]/b/text()').extract_first()
        item['condition'] = response.xpath('//span[text()="condition: "]/b/text()').extract_first()

        body = response.xpath('//section[@id="postingbody"]/text()').getall()
        body = ''.join(body)
        dict_attr = self.regex_body(body, item_title)

        item['memory'] = dict_attr['memory']
        item['contract'] = dict_attr['contract']
        item['color'] = dict_attr['color']

        if item['brand'] == None and item['model'] != None:
            model = str(item['model']).lower()
            if re.search("(iphone)", model):
                item['brand'] = "apple"

        if item['brand'] == None and item['mobOs'] == "apple iOS":
            item['brand'] = "apple"

        if item['brand'] == None:
            title = item_title.lower()
            if re.search("(galaxy)", title) or re.search("(samsung)", title):
                item['brand'] = "samsung"

        yield item

    def regex_body(self, body, item_title):
        '''Function for extract information of body text

        [description]

        Arguments:
            body {string} -- String with phone description

        Returns:
            dict -- Dictionary with color, memory and contract attributes
        '''
        dict_attr = {
            'memory': None,
            'color': None,
            'contract': None
        }

        body = body.replace('\n', '')
        body = body.replace('\t', '')
        body = body.lower()
        item_title = item_title.lower()

        MEMORY_REGEX = "([0-9]*[0-9]*[0-9][' ']*gb)"
        COLOR_REGEX = {
            'black': "(black)",
            'red': "(red)",
            'blue': "(blue)",
            'silver': "(silver)",
            'white': "(white)",
            'gray': "(gr[ae]*y)",
            'gold': "(gold)",
            'rose': "(rose)",
            'purple': "(purple)"
        }
        CONTRACT_COMPANY = {
            'att': "(at[&]*[' ']*t)",
            'verizon': "(verizon)",
            'sprint': "(sprint)",
            'tmobile': "(t[' ']*[-]*mobile)"
        }

        try:
            if re.search(MEMORY_REGEX, item_title):
                dict_attr['memory'] = re.search(MEMORY_REGEX, item_title)[0]
            else:
                dict_attr['memory'] = re.search(MEMORY_REGEX, body)[0]
        except:
            dict_attr['memory'] = None

        dict_attr['body'] = body

        for reg in CONTRACT_COMPANY:
            if re.search(CONTRACT_COMPANY[reg], item_title) or re.search(CONTRACT_COMPANY[reg], body):
                dict_attr['contract'] = reg

        if dict_attr['contract'] == None:
            dict_attr['contract'] = "unlocked"

        for col in COLOR_REGEX:
            if re.search(COLOR_REGEX[col], item_title) or re.search(COLOR_REGEX[col], body):
                dict_attr['color'] = col

        return dict_attr