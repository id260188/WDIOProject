Feature: demo feature

    #@demo
    Scenario Outline: Run demo feature
        Given user launches webbrowser
       # When search with <searchItem>
        # And click on the first search result
        Then url should match with <ExpectedUrl>

        Examples:
            |TestID | searchItem    | ExpectedUrl   |
            |TC_001 | Webdriver     | https://www.selenium.dev/documentation/webdriver/|