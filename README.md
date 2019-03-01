# The Problem

CDC posts its public, open datasets on open.cdc.gov.  These datasets then migrate to data.gov and if they are annotated as geospatially aware datasets, they then migrate to geoplatform.gov.  Many of CDC's geospatial datasets have not been identified properly and therefore never properly make it geoplatform.gov.  Datasets on geoplatform.gov are used by GIS analysts around the world for in depth GIS analyst on public data.  

# The Solution

This tool scans through a dataset provided that is currently on open.cdc.gov, identifies if it contains geospatial data then provides a properly annotated data manifest that identifies all of the geospatial file formats available and resubmits it to open.cdc.gov.  In the future it will be able to automatically scan through all datasets on open.cdc.gov and fix any outstanding datasets.  It can also become a tool for data managers to use before submitting to open.cdc.gov to provide better data manifests before the datasets are submitted.  These datasets will then become readily available to GIS programs around the world who want to leverage CDC's mass amount of publicly available data in more robust analytic capabilities.

# Rules

Github rules of behavior agreement
Slack Rules of Behavior
Submissions due 2018-10-04:1515

# Judging

## 80 Points:

* Uniqueness,
* Creativity,
* Public Health Impact Factor,
* Effort for release,
* Community need,
* Testability, Design, Performance

## 10 Points

* Use of CDC FOSS

## 10 Points

* Uniform Distribution of Labor
