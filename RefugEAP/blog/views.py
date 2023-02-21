from django.views import View
from django.shortcuts import render
from django.views import generic 
from .models import Post

def PostList(request,slug):
    post = Post.objects.get(slug=slug)
    context = {
        'post': post,
    }
    return render(request, 'temp.html', context)


class PostList(generic.ListView):
    queryset = Post.objects.filter(status=1).order_by('-published_date')
    template_name = 'index.html'

class PostDetail(generic.DetailView):
    model = Post
    template_name = 'post.html'
