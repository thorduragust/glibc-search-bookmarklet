# glibc-search-bookmarklet
Very simple bookmarklet that searches glibc online documentation for a given input string. It uses duckduckgo site: feature because google wouldn't give any usable results. 

Add this code to your bookmark location when creating a new bookmark:

javascript:var%20input_string%20%3D%20prompt(%22search%20glibc%3A%20%22)%3B%0Avar%20url%20%3D%20%22https%3A%2F%2Fduckduckgo.com%2F%3Fq%3Dsite%253Agnu.org%252Fsoftware%252Flibc%252F%2B%22%3B%0A%0Afor(var%20i%20%3D%200%3B%20i%20%3C%20input_string.length%3B%20i%2B%2B)%20%7B%0A%09if(input_string%5Bi%5D%20%3D%3D%20%22%20%22)%20%7B%0A%09%09url%20%2B%3D%20%22%2B%22%3B%0A%09%7Delse%20%7B%0A%09%09url%20%2B%3D%20input_string%5Bi%5D%3B%0A%09%7D%0A%7D%0A%0Awindow.location.assign(url)%3B
