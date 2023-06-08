# Resume Site

This resume template was provided [here](https://github.com/sproogen/jameswgrant)
----

This resume site is already live on GitHub Pages [here](https://kennethkutyn.github.io/Resume2/). 

If you'd like to run it locally:

### Step 1
Clone this repo into a directory of your choosing.

### Step 2
In your terminal, run 
```
gem install bundler:2.1.4
bundle install
```

### Step 3
Launch server:
```
bundle exec jekyll serve
```

### Step 4 
You should now be able to see the Resume site at localhost:4000

### Step 5
Replace the LD API key in index.js line 12
Create a feature flag in the LD interface and replace the key in index.js line 22
Enable client-side availabilty in the LD UI.
Turn the flag on with any desired allocation %.
You can change the user ID in index.js line 9 to see the flag value change. 
The "About Me" section header will change depending on the flag value.


For any help installing Jekyll Gems, see [here](https://jekyllrb.com/docs/installation/).


Any changes you make will automatically build and you will be able to see these by refreshing your browser.

*Note: You will need to re-run `bundle exec jekyll serve` to see changes made in `_config.yml`.*

----


## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
