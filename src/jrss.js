function JRss(xml) {
    this._parse(xml);
};

JRss.prototype  = {
    
    _parse: function(xml) {
    
        if(jQuery('rss', xml).length == 0) this.version = '1.0';
        else this.version = jQuery('rss', xml).eq(0).attr('version');

        var channel = jQuery('channel', xml).eq(0);
    
        this.title = jQuery(channel).find('title:first').text();
        this.link = jQuery(channel).find('link:first').text();
        this.category = jQuery(channel).find('category:first').text();
        //Not sure what's happening here or if we should even add this field
        //this.author = jQuery(channel).find('[nodeName=dc:creator]').text();
        this.description = jQuery(channel).find('description:first').text();
        this.language = jQuery(channel).find('language:first').text();
        this.updated = jQuery(channel).find('lastBuildDate:first').text();
        this.image = jQuery(channel).find("enclosure").attr('url');

        this.items = new Array();
        
        var feed = this;
        
        jQuery('item', xml).each( function() {
        
            var item = new JFeedItem();
            var customFormat = object.customDateFormat;
            
            item.title = jQuery(this).find('title').eq(0).text();
            item.link = jQuery(this).find('link').eq(0).text();
            item.category = jQuery(this).find('category').eq(0).text();
            //item.author = jQuery(this).find('[nodeName=dc:creator]').eq(0).text(0);
            item.description = jQuery(this).find('description').eq(0).text();
            item.updated = jQuery(this).find('pubDate').eq(0).text();
            var mydate = jQuery(this).find('pubDate').eq(0).text();
            item.customDateFormat = mydate.getformat(customFormat);
            
            item.id = jQuery(this).find('guid').eq(0).text();
            item.image = jQuery(this).find('enclosure').attr('url');
            
            feed.items.push(item);
        });
    }
};

