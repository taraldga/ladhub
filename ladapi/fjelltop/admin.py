from django.contrib import admin
from fjelltop.models import Top, Ascent

# Register your models here.
class TopAdmin(admin.ModelAdmin):
    pass

class AscentAdmin(admin.ModelAdmin):
    pass

admin.site.register(Top, TopAdmin)
admin.site.register(Ascent, AscentAdmin)
