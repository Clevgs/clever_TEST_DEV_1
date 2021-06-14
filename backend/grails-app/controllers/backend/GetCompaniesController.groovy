package backend

class GetCompaniesController {
    CompaniesService companiesService
    
 
    static defaultAction = "list"
   
    def list() { 
        def response = companiesService.getCompanies()
        respond response, formats: ['json']
                          
    }
}
