This is a 40-line Node server, 30 lines of which are straight copypasta. Thanks to Blaise Roberts for [the boilerplate code](https://github.com/BlaiseRoberts/proxy-server).

## APIs supported

- [Goodreads](https://www.goodreads.com/api)
- [Musixmatch](https://developer.musixmatch.com/documentation)

### Make Goodreads queries

Example Goodreads API call: 
```
https://www.goodreads.com/book/show/50.xml
```

How to make the same call through the proxy server:
```
http://mixify-proxy.herokuapp.com/gr/book/show/50.xml
```

### Make Musixmatch queries

Example Musixmatch API call: 
```
http://api.musixmatch.com/ws/1.1/track.search?q_artist=muse
```

How to make the same call through the proxy server:
```
http://mixify-proxy.herokuapp.com/mm/track.search?q_artist=muse
```