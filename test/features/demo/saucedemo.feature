Feature: Web interactions

    @demo
    Scenario Outline: sauceCode web interactions
        Given Login to saucedemo.com webpage
        #Then inventory must list <NumberOfProducts>
        #Then Validate all products have valid prices

        Examples:
            |TestID |NumberOfProducts |
            |TC_001 |6                |