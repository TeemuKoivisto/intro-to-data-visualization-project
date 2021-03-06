# [Introduction to Data Visualization 2019 Spring: Project](https://teemukoivisto.github.io/intro-to-data-visualization-project/)

This is my IDV data visualization project, aimed to visualize the differences between the election poll numbers in British parliamentary elections. If I have time, I might try to use the same viz-magic for Finnish elections too.

The dataset was from here https://informationisbeautiful.net/data/ and the Google Sheet http://bit.ly/polldancing

**Table of Contents**

<!-- toc -->
- [Introduction to Data Visualization 2019 Spring: Project](#introduction-to-data-visualization-2019-spring-project)
  - [Prerequisites](#prerequisites)
  - [How to install notebook environment](#how-to-install-notebook-environment)
  - [TODO](#todo)
<!-- tocstop -->

## Prerequisites

You have to have Python >= 3.5 and pip installed.

## How to install notebook environment

I am using virtualenv with virtualenvwrapper for installing the dependencies. https://virtualenvwrapper.readthedocs.io/en/latest/

1. Clone this repo & create new virtualenv project: `python3 -m mkvirtualenv idv-project`
2. Enable it: `workon idv-project`
3. Install dependencies: `pip install -r requirements.txt`
4. Start the notebook: `jupyter notebook`

## TODO

* Add the current major party in parliament to the poll-date time-series as background colors
* Perhaps add some major political events to the data as points on the lines
* See if there is a direct correlation between being in government vs in opposition, and how much it affects ratings
* See if the trend for the party election results can be estimated from the poll data, and if so how much before the elections it can be done accurately?
* Try to find the reasons for any abnormal behaviour in the data, eg during 1997-2001, 1988-1995