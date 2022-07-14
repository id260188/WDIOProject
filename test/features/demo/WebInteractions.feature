Feature: Web interactions

    
    Scenario Outline: demo web interactions
        Given A webpage is opened
        When perform web interactions
        #And click on the first search result
        #Then url should match with <ExpectedUrl>

        Examples:
            |TestID |
            |TC_001 |