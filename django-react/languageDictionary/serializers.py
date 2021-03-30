from rest_framework import serializers

from .models import DictionaryPair


class DictionaryPairSerializer(serializers.ModelSerializer):
    class Meta:
        model = DictionaryPair
        fields = ['id', 'fromL', 'rus', 'correct', 'incorrect', 'language_id']

    def validate(self, data):
        print(data)
        if 'language_id' not in data:
            raise serializers.ValidationError("Wrong data!")
        if len(data['fromL']) > 255:
            raise serializers.ValidationError("Wrong data!")
        return data
