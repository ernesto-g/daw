#!/usr/bin/env python3
import cgi
form = cgi.FieldStorage()
print("Content-Type: text/text\n")
print(form["id"].value+" "+form["state"].value+"\n")

