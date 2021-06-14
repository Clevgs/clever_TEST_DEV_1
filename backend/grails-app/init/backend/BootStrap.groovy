package backend

class BootStrap {

    def init = { servletContext ->
        def ford = new Company(name:"Ford",segment:"Vehicle").save()
        def ferrari = new Company(name:"Ferrari",segment:"Vehicle").save()
        def bayer = new Company(name:"Bayer",segment:"Health").save()
    }
    def destroy = {
    }
}
