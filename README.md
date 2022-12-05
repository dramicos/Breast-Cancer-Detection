![alt text](images/breast-cancer.webp)
# Breast Cancer Diagnosis 

## Introduction 
"  Breast cancer arises in the lining cells (epithelium) of the ducts (85%) or lobules (15%) in the glandular tissue of the breast. Initially, the cancerous growth is confined to the duct or lobule (“in situ”) where it generally causes no symptoms and has minimal potential for spread (metastasis)....
In 2020, there were 2.3 million women diagnosed with breast cancer and 685 000 deaths globally. As of the end of 2020, there were 7.8 million women alive who were diagnosed with breast cancer in the past 5 years, making it the world’s most prevalent cancer. There are more lost disability-adjusted life years (DALYs) by women to breast cancer globally than any other type of cancer.  Breast cancer occurs in every country of the world in women at any age after puberty but with increasing rates in later life."  -  who.int/news-room/fact-sheets (World Health Orginization)


## Description

We were interested in understanding how well machine learning can be used to help medical professionals in diagnosing 
breast cancer.  We know that any improvement in determining whether or not a person has breast cancer can save lives.
In that reasoning we decided to see how well a variety of models and methods can be used in differentiating the data provided by the University of Wisconsin to distinguish between cancerous and non-cancerous growths.
It turned out that most of the machine learning models performed reasonably well.  We did find out that there was a lot of variation in performance though.
Ultimately it seems that a neural network approach may have the best potential with several runs giving zero false negatives, though it also takes the longest to train.

## Data used

* Breast Cancer Data (122 kB): https://archive.ics.uci.edu/ml/datasets/breast+cancer+wisconsin+(diagnostic)

## Installation

To run the jupyter notebook and run the models for yourself do the following:

1. Clone or download the repository.
1. The notebook was designed to be run in google colab and is named 'colab'.
1. You can run the notebook locally, but you will need to have the following libraries installed:
	* keras-tuner
	* tensorflow
	* sklearn
	* pandas
	* numpy
	* matplotlib
1. Run in an environment with python 3.8 (other versions may work, but there are no guarantees)

The web page may be run on any hosting service.
* Our site is hosted here: (https://dramicos.github.io/Breast-Cancer-Detection/)

#
## Credits

### Contributers (Group 8)
* [Hyeeun Hughes](https://github.com/b0906)
* [Arnold Schultz](https://github.com/dramicos)
* [Mauvonte Roberts](https://github.com/codere109)
* [Ryan Grimsley](https://github.com/Grimsbear)

### Acknowledgements
* [Stackoverflow](https://stackoverflow.com/)
* [Medium.com](https://scorrea92.medium.com)
* [tobiasahlin.com](https://tobiasahlin.com/moving-letters/)
* [who.int](https://www.who.int/)
* [TensorFlow Authors](https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/keras/keras_tuner.ipynb#scrollTo=VaIhhdKf9VtI)