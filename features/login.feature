Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can search for flights

    Given I am on the login page
    When I select <originInput>, <destinationInput> and <outboundDate>
    Then I should see a page with the available flights and the following message: <message>

    Examples:
      | originInput | destinationInput | outboundDate | message                        |
      | Madrid      | Barcelona        | 01/06/2024   | Madrid (MAD) - Barcelona (BCN) |
  
