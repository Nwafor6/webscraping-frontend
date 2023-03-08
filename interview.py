from bs4 import BeautifulSoup
import requests



r=requests.get("https://ng.indeed.com/jobs?q=python&l=lagos&vjk=da1ec40d296febc2").text
soup=BeautifulSoup("r",'lxml')
indeed_jobs=soup.find("div", class_="job_seen_beacon")
print(indeed_jobs)