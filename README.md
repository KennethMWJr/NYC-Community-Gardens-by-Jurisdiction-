# NYC-Community-Gardens-by-Jurisdiction-
Using SODA API from NYC Open Data, discover the jurisdiction of any community garden registered with NYC Parks, GreenThumb.

# Project Overview

Groups of volunteers in NYC manage community gardens on property with different jurisdicitions - aka ownership. Each jurisdiction has it's own set of policies/agreements setting the parameters for how these groups should interact with the land they use for community gardening purposes. In this project the user will enter a zipcode in NYC and receive the community gardens and jurisdiction

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sep 10th| Project Proposal 
|Sep 11th| Find external Api 
|Sep 12th| Render garden name in drop down list 
|Sep 13th| Allow user to enter garden name 
|Sep 14th|Render jurisdiction
|Sep 15th| add placeholder for links related to jurisdiction and final edits
|Sep 30th| Present | Incomplete



## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

In this project I intend to access NYC's data on community gardens registered with NYC Parks, GreenThumb to identify the jurisdiction of any registered community garden in NYC. Along with jurisdiction, I also intend to display the address, community board and concil district of each garden.  

The main goal is to inform community gardeners along with garden supporters of a community garden's jurisdiction and provide information on what that means for how that commuity garden should be used. This part of the project feels more of a PMVP that I would love to incorporate if I have time. In addition to that, I would like to develop a way for anyone to provide more information related to community gardens in regard to jurisdictions. The purpose of that would be to ensure information on each jurisdiction is up to date when a user submits a community garden name.   

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

Pg 1 to 3 - Regular, iPad, and Mobile display: 
https://wireframe.cc/pro/pp/80695d055272749



## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

Pg 4 - Matrix:
https://wireframe.cc/pro/pp/80695d055272749


## API Data Sample

Show us a snippet of JSON returned by your API so we know you can access it and get the info you need

{
        "propid": "NA",
        "boro": "M",
        "community_board": "M11",
        "council_district": "8",
        "garden_name": "Magic Garden",
        "address": "1665-71 Park Avenue",
        "size": "0.207",
        "jurisdiction": "HPD",
        "neighborhoodname": "East Harlem",
        "cross_streets": "117-118th Street",
        "latitude": "40.800245",
        "longitude": "-73.942524",
        "postcode": "10035",
        "census_tract": "182",
        "bin": "1000000",
        "bbl": "1016450003",
        "nta": "East Harlem North                                                          "
    },
    {
        "propid": "NA",
        "boro": "Q",
        "community_board": "Q03",
        "council_district": "21",
        "garden_name": "Malcom X Day Care Center",
        "address": "111-26 Northern Boulevard.",
        "size": "0.046",
        "jurisdiction": "TPL",
        "cross_streets": "111th ST & 112th ST",
        "latitude": "40.757942",
        "longitude": "-73.858287",
        "postcode": "11368",
        "census_tract": "381",
        "bin": "4000000",
        "bbl": "4017260014",
        "nta": "North Corona                                                               "
    },
    {
        "propid": "NA",
        "boro": "B",
        "community_board": "B08",
        "council_district": "36",
        "garden_name": "MaMa Dee's Garden",
        "address": "1397 Bedford Avenue",
        "size": "0.072",
        "jurisdiction": "TPL",
        "neighborhoodname": "Crown Heights",
        "latitude": "40.675251",
        "longitude": "-73.953404",
        "postcode": "11216",
        "census_tract": "221",
        "bin": "3000000",
        "bbl": "3012250010",
        "nta": "Crown Heights North                                                        "
    },


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use external api 
- Render garden name in drop down list  
- Allow user to enter garden name 
- Render jurisdiction
- add placeholder for links related to jurisdiction  

#### PostMVP 

- Add links according for each jurisdiction 
- Add more style
- Develop a way for users to add and store information for jursidiction


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 4hrs|  |  |
| Working with API | 4hrs | | | |
| Adding CSS | 6hrs|   |   |
| Adding JS |  5hrs|  |  | 
| Adding HTML| 5 hrs|  |   | 
| debugging| 6hrs 
| Total | H | 30 hrs|  |  |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  