from django.test import TestCase
from leads.models import Lead
from faker import Faker
fake = Faker()
# Create your tests here.
class SomeModelModelTest(TestCase):
    def setUp(self):
        Lead.objects.create(
            name=fake.name(),
            email=fake.email(),
            # phone=fake.phone_number(),
            message=fake.text(),
            # source=fake.url()
        )
        Lead.objects.create(
            name=fake.name(),
            email=fake.email(),
            # phone=fake.phone_number(),
            message=fake.text(),
            # source=fake.url()
        )
    def test_save_model(self):
        saved_models = Lead.objects.count()
        self.assertEqual(saved_models, 2)