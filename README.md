# Breast-Cancer-Detection
Determine which machine learning models might be best at detecting breast cancer.

# Introduction 
Breast cancer arises in the lining cells (epithelium) of the ducts (85%) or lobules (15%) in the glandular tissue of the breast. Initially, the cancerous growth is confined to the duct or lobule (“in situ”) where it generally causes no symptoms and has minimal potential for spread (metastasis).
According to World Health Organization(WHO), In 2020, there were 2.3 million women diagnosed with breast cancer and 685 000 deaths globally. As of the end of 2020, there were 7.8 million women alive who were diagnosed with breast cancer in the past 5 years, making it the world’s most prevalent cancer. There are more lost disability-adjusted life years (DALYs) by women to breast cancer globally than any other type of cancer.  Breast cancer occurs in every country of the world in women at any age after puberty but with increasing rates in later life. 

# Overview
Our website showcases the female breast cancer detection age from 10 to 99 years old which was donated by University of Wisconsin
 Using Breast Cancer Data from UCI Machine Learning Repository, we will visualize the comparative model analysis:  If tumor location, what age group, tumor size potentially influence breast cancer recurrence.  Health prfessionals more 

## Contributers (Group 8)
* Hyeeun Hughes
* Arnold Schultz
* Mauvonte Roberts
* Ryan Grimsley

## Contents
* Breast Cancer Data (122 kB): https://archive.ics.uci.edu/ml/datasets/breast+cancer+wisconsin+(diagnostic)

## Work Breakdown
* Hyeeun Hughes: Project Manager, Data Cleaning & Processing, Tableau(TBD)
* Arnold Schultz: Git Lead, Model Building/Analysis
* Mauvonte Roberts: Web Building(CSS)
* Ryan Grimsley: Web Building(HTML/Bootstrap)

## Major Tasks: Research

### Data Cleaning/Processing Tasks

* Check and remove null values.

* Check and remove duplicate entries.

* Rename Columns.

* Check 10 attributes' value counts.

* Choose a cutoff value and creat a list of column name to be replaced.

* Chosoe value counts for binning.

* Determine which values to replace if counts are less/more than chosen counts.

* Convert categorical data to numeric with pd.get_dummies.

* Split the preprocessed data into the features and target arrays.

* Split the processed data into training and testing dataset.

* Create and fit the StandardScaler.

* Scale the data.

### Model Building/Analysis Tasks

* Test multiple machine learning techinques
    
    * Neural Network

    * Random Forest Classifier

    * K-Nearest Neighbors

    * K-Means

* Take the best performing model and run it through a confusion matrix

* Tweak the model to minimize the amount of false negatives

### Website Tasks:

 * Utilize a openflowing website, that allows user to navigate easily and freely

    * Welcome/Splash page with project explanation, considerations,  and references.

    * Page for each model as well as a short analysis.

    * Summarization Page to go over the end results.

* Utilizes Plotly:

   * Plotly utilization for chart visualization. Specific charts TBD; at least bar chart and line charts across various categories.   

### Unique Library Task:

* https://www.apexcharts.com/ - Charting library

### User Driven Interaction:

* Menu selections to view by Introduction, Data Processing, Models, and Analysis 

* Dropdown menu to select Models

* Clicking on each model will display a detailed analysis

### Presentation Tasks

* Rehearse and Structure presentation

    * Decide on who will guide presentation(Screen share, user input etc)

    * Decide speaking order

    * Ensure time management



## Instructions
