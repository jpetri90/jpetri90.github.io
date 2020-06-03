/* template
{
  title: '',
  description: '',
  datatag: 'work_' + wcounter++,
  stack: '',
  business_value: ''
}
*/


var wcounter = 0;
const workExperience = {
  workExperience:
  [
    {
      title: 'Sales Channel Reporting Implementation',
      description: 'To streamline reporting regarding the source of a sales transaction, a variety of server and client side modules were implemented to allow transaction classification in a centralized location.',
      datatag: 'work_' + wcounter++,
      stack: 'SuiteScript UserEvent scripts, various NetSuite UI components',
      business_value: 'Crisp and reliable insight into sales channels enable business decisions and sales strategy planning.'
    },
    {
      title: 'Transactional Inventory Location Management',
      description: 'Business required the ability to enforce custom warehouse assignment on transaction sets, specifically for multi-box inventory items.',
      datatag: 'work_' + wcounter++,
      stack: 'SuiteScript UserEvent scripts, custom SuiteScript modules',
      business_value: 'Improved inventory management, reduced shipping cost for business and ability to meet third party resellers custom shipping requirements'
    },
    {
      title: 'Customized GL Routing Plugin',
      description: 'Financial Reclassification of certain transaction sets in accordance with business requirements',
      datatag: 'work_' + wcounter++,
      stack: 'SuiteScript Custom GL Implementation',
      business_value: 'Eliminate manual processes and increase accuracy of financial reporting'
    },
    {
      title: 'Business Rule Driven Data Synchronization',
      description: 'Business with a hierarchical customer structure needed to feed different subsets of data (i.e. commission or finance related) down the hierarchy.',
      datatag: 'work_' + wcounter++,
      stack: 'SuiteScript UserEvent and Scheduled scripts, Third Party bundle, UI components',
      business_value: 'Ensures accuracy of database and eliminates manual processes'
    },
    {
      title: 'Custom Database Search Features',
      description: 'Accounting processes required visibilty into transaction sets tied to email addresses in order to process customer communications.',
      datatag: 'work_' + wcounter++,
      stack: 'SuiteScript Suitelet, JavaScript, HTML',
      business_value: 'Successful Accounts Receivable Collections efforts'
    },
    {
      title: 'Service Endpoint Smoke Test Automation',
      description: "Automating testing of NetSuite's webservices endpoint via Postman",
      datatag: 'work_' + wcounter++,
      stack: 'Postman collection',
      business_value: 'Monitoring system availabilty and reliability to minimize service disruption'
    },
    {
      title: 'Customer Facing Communication Development and Maintanance',
      description: 'Creating and maintaining customer facing emails and PDF documents',
      datatag: 'work_' + wcounter++,
      stack: 'BfO PDF library, trimPath/Freemarker, Third Party content rendering framework',
      business_value: ''
    },
    {
      title: 'Integration Driven Dataset Posting',
      description: 'Business uses multiple systems and datasets have to be built in one and sent to an integration provider for further processing. Process is fully automated and allows for manual batch processing',
      datatag: 'work_' + wcounter++,
      stack: 'SuiteScript UserEvent and Scheduled scripts, Suitelet',
      business_value: 'High data quality to drive system processes and business decisions'
    }
  ]
}
