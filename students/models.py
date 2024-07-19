from django.db import models # type: ignore

# Create your models here.

class Student(models.Model):
    studentID = models.AutoField(primary_key=True)
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)
    Email = models.EmailField(max_length=50)
    RegistrationNo = models.CharField(max_length=50)
    Course = models.CharField(max_length=50)

    Semester = models.CharField(max_length=50)
