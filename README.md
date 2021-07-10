#mansa-dashboard

Mansa technical challenge https://github.com/MansaGroup/kanedama/tree/main/frontend

# Description
The idea of this dashboard to provide information in one view without disrupting user's focus.

3 main blocks of information 
- User profile 
- Company information
- Accounts

Accounts block is displayed under the form of navigation tab, which consists of 
- Tabs view: All the accounts of current user
- Detail view:
  - Current balance
  - Transactions: list & chart presentations
(note: For the transactions, the start/end date are fixed for the sake of simplycity)

# Implementation & Dependencies
The React project is designed for desktop view 
and is implemented in Javascript using styled-components for styling and Jest for testing.

The project follows Atomic design patterns with some adjusted structure
- App.jsx hold the structure of the app
- templates : second level of information blocks ( Profile, Company, AccountInfo and Detal)
  - components : presentations of chart, transactions list and accounts list

Dependencies:
  styled-components
  lodash
  react-trend (for chart)
# Possible improvements
- Handle the dashboard view when loading data or having error in order to have a seamlessly UX
- Add funtions for allowing the filter of transactions by dates, amount etc.
- An interaction link between the transaction list and chart for having more insights about current user's situation
- Exploring the data-pattern of the transactions

Lastly, a score-index for each user can be presented (of course, it required lots of data-analysis etc.) to provide a glanceable view of user's situation



