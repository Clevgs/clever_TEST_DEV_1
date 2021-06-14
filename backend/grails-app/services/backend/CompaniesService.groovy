package backend

import grails.gorm.transactions.Transactional

@Transactional
class CompaniesService {

    def getCompanies() {
        return Company.list()     
    }
}
