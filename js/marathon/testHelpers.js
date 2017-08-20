// (function(exports) {
// 	function mockResponseObject() =
// 		{"response":
// 			{
// 				"status":"ok",
// 				"userTier":"developer",
// 				"total":1973784,
// 				"startIndex":1,
// 				"pageSize":3,
// 				"currentPage":1,
// 				"pages":197379,
// 				"orderBy":"newest",
// 				"results":
// 					[
// 						{"id":"sport/live/2017/aug/19/wallabies-v-all-blacks-bledisloe-cuprugby-championship-opener-live","type":"liveblog","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-08-19T09:49:15Z","webTitle":"Wallabies v All Blacks: Bledisloe Cup/Rugby Championship opener â€“ live!","webUrl":"https://www.theguardian.com/sport/live/2017/aug/19/wallabies-v-all-blacks-bledisloe-cuprugby-championship-opener-live","apiUrl":"https://content.guardianapis.com/sport/live/2017/aug/19/wallabies-v-all-blacks-bledisloe-cuprugby-championship-opener-live","isHosted":false},
// 						{"id":"sport/2017/aug/19/england-france-womens-rugby-world-cup-semi-finals","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-08-19T09:00:10Z","webTitle":"Englandâ€™s work of art may be damaged by Les Bleuesâ€™ return to form","webUrl":"https://www.theguardian.com/sport/2017/aug/19/england-france-womens-rugby-world-cup-semi-finals","apiUrl":"https://content.guardianapis.com/sport/2017/aug/19/england-france-womens-rugby-world-cup-semi-finals","isHosted":false},
// 						{"id":"sport/2017/aug/19/dina-asher-smith-graduate-higher-level-london-success","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-08-19T09:00:10Z","webTitle":"Dina Asher-Smith ready to graduate to higher level after London success","webUrl":"https://www.theguardian.com/sport/2017/aug/19/dina-asher-smith-graduate-higher-level-london-success","apiUrl":"https://content.guardianapis.com/sport/2017/aug/19/dina-asher-smith-graduate-higher-level-london-success","isHosted":false},
// 				]
// 			}
// 		}
// 	exports.
// })(this)

// var mockResponse =
// 	{"response":
// 		{
// 			"status":"ok",
// 			"userTier":"developer",
// 			"total":1973784,
// 			"startIndex":1,
// 			"pageSize":10,
// 			"currentPage":1,
// 			"pages":197379,
// 			"orderBy":"newest",
// 			"results":
// 				[
// 					{"id":"sport/live/2017/aug/19/wallabies-v-all-blacks-bledisloe-cuprugby-championship-opener-live","type":"liveblog","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-08-19T09:49:15Z","webTitle":"Wallabies v All Blacks: Bledisloe Cup/Rugby Championship opener â€“ live!","webUrl":"https://www.theguardian.com/sport/live/2017/aug/19/wallabies-v-all-blacks-bledisloe-cuprugby-championship-opener-live","apiUrl":"https://content.guardianapis.com/sport/live/2017/aug/19/wallabies-v-all-blacks-bledisloe-cuprugby-championship-opener-live","isHosted":false},
// 					{"id":"sport/2017/aug/19/england-france-womens-rugby-world-cup-semi-finals","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-08-19T09:00:10Z","webTitle":"Englandâ€™s work of art may be damaged by Les Bleuesâ€™ return to form","webUrl":"https://www.theguardian.com/sport/2017/aug/19/england-france-womens-rugby-world-cup-semi-finals","apiUrl":"https://content.guardianapis.com/sport/2017/aug/19/england-france-womens-rugby-world-cup-semi-finals","isHosted":false},
// 					{"id":"sport/2017/aug/19/dina-asher-smith-graduate-higher-level-london-success","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-08-19T09:00:10Z","webTitle":"Dina Asher-Smith ready to graduate to higher level after London success","webUrl":"https://www.theguardian.com/sport/2017/aug/19/dina-asher-smith-graduate-higher-level-london-success","apiUrl":"https://content.guardianapis.com/sport/2017/aug/19/dina-asher-smith-graduate-higher-level-london-success","isHosted":false},
// 					{"id":"sport/2017/aug/19/will-mcgregor-v-mayweather-save-american-boxing-or-bury-it","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-08-19T09:00:10Z","webTitle":"Will McGregor v Mayweather save American boxing â€“ or bury it?","webUrl":"https://www.theguardian.com/sport/2017/aug/19/will-mcgregor-v-mayweather-save-american-boxing-or-bury-it","apiUrl":"https://content.guardianapis.com/sport/2017/aug/19/will-mcgregor-v-mayweather-save-american-boxing-or-bury-it","isHosted":false},
// 					{"id":"travel/2017/aug/19/germany-tour-nuremberg-city-break-reconstruction-medieval-history","type":"article","sectionId":"travel","sectionName":"Travel","webPublicationDate":"2017-08-19T09:00:09Z","webTitle":"History lesson: Nuremberg rebuilt â€“ a summer tour of Germany, part two","webUrl":"https://www.theguardian.com/travel/2017/aug/19/germany-tour-nuremberg-city-break-reconstruction-medieval-history","apiUrl":"https://content.guardianapis.com/travel/2017/aug/19/germany-tour-nuremberg-city-break-reconstruction-medieval-history","isHosted":false},
// 					{"id":"lifeandstyle/2017/aug/19/around-the-world-in-six-cookbooks-review-dave-hall","type":"article","sectionId":"lifeandstyle","sectionName":"Life and style","webPublicationDate":"2017-08-19T09:00:09Z","webTitle":"Around the world in six cookbooks | Cookbook review","webUrl":"https://www.theguardian.com/lifeandstyle/2017/aug/19/around-the-world-in-six-cookbooks-review-dave-hall","apiUrl":"https://content.guardianapis.com/lifeandstyle/2017/aug/19/around-the-world-in-six-cookbooks-review-dave-hall","isHosted":false},
// 					{"id":"world/2017/aug/18/barcelona-victims-citizens-dozens-countries-among-the-dead-and-injured","type":"article","sectionId":"world","sectionName":"World news","webPublicationDate":"2017-08-19T08:57:42Z","webTitle":"Spain attacks: Canadian grandfather named as latest Las Ramblas victim","webUrl":"https://www.theguardian.com/world/2017/aug/18/barcelona-victims-citizens-dozens-countries-among-the-dead-and-injured","apiUrl":"https://content.guardianapis.com/world/2017/aug/18/barcelona-victims-citizens-dozens-countries-among-the-dead-and-injured","isHosted":false},
// 					{"id":"world/2017/aug/18/victims-of-the-spain-terrorist-attacks-what-we-know-so-far","type":"article","sectionId":"world","sectionName":"World news","webPublicationDate":"2017-08-19T08:47:36Z","webTitle":"Victims of the Spain terrorist attacks: what we know so far","webUrl":"https://www.theguardian.com/world/2017/aug/18/victims-of-the-spain-terrorist-attacks-what-we-know-so-far","apiUrl":"https://content.guardianapis.com/world/2017/aug/18/victims-of-the-spain-terrorist-attacks-what-we-know-so-far","isHosted":false},
// 					{"id":"books/2017/aug/19/history-of-running-away-paula-mcgrath-review","type":"article","sectionId":"books","sectionName":"Books","webPublicationDate":"2017-08-19T08:30:09Z","webTitle":"A History of Running Away by Paula McGrath review â€“ fight or flight?","webUrl":"https://www.theguardian.com/books/2017/aug/19/history-of-running-away-paula-mcgrath-review","apiUrl":"https://content.guardianapis.com/books/2017/aug/19/history-of-running-away-paula-mcgrath-review","isHosted":false},
// 					{"id":"sport/2017/aug/19/england-west-indies-bowling-alastair-cook","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-08-19T08:30:09Z","webTitle":"Hungry Alastair Cook works up an appetite for West Indiesâ€™ buffet bowling | Andy Bull","webUrl":"https://www.theguardian.com/sport/2017/aug/19/england-west-indies-bowling-alastair-cook","apiUrl":"https://content.guardianapis.com/sport/2017/aug/19/england-west-indies-bowling-alastair-cook","isHosted":false
// 				}
// 			]
// 		}
// 	}

(function(exports) {
	function MockApiCall() {
		this.responseArray = [
			{"id":"sport/2017/aug/19/dina-asher-smith-graduate-higher-level-london-success","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-08-19T09:00:10Z","webTitle":"Dina Asher-Smith ready to graduate to higher level after London 														success","webUrl":"https://www.theguardian.com/sport/2017/aug/19/dina-asher-smith-graduate-higher-level-london-success","apiUrl":"https://content.guardianapis.com/sport/2017/aug/19/dina-asher-smith-graduate-higher-level-london-success","isHosted":false},
			{"id":"sport/2017/aug/19/will-mcgregor-v-mayweather-save-american-boxing-or-bury-it","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-08-19T09:00:10Z","webTitle":"Will McGregor v Mayweather save American boxing â€“ or bury it?","webUrl":"https://www.theguardian.com/sport/2017/aug/19/will-mcgregor-v-mayweather-save-american-boxing-or-bury-it","apiUrl":"https://content.guardianapis.com/sport/2017/aug/19/will-mcgregor-v-mayweather-save-american-boxing-or-bury-it","isHosted":false}
		]
	}
	exports.MockApiCall = MockApiCall;
})(this);