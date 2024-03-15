import type { Meta, StoryObj } from '@storybook/react';

import { BaseGraphStories } from 'src/components/__stories__/BaseGraphStories';

const meta: Meta<typeof BaseGraphStories> = {
  component: BaseGraphStories,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
  title: 'Dashboard/src/components/orders/quotes/list/Quotes',
};

export default meta;

type IStory = StoryObj<typeof BaseGraphStories>;

export const QuotesList: IStory = {
  args: {
    query: `query quotesList($first: Int, $after: String, $before: String, $last: Int) {
  landedCosts(first: $first, after: $after, before: $before, last: $last) {
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        createdAt

        root {
          parties {
            type
            person {
              email
              firstName
              lastName
            }
          }
          order {
            id
          }

          items {
            amount
          }
        }

        shipmentRating {
          currencyCode
          shipTo {
            countryCode
          }
        }
      }
    }
  }
}`,
    schemaLabel: 'internal',
    storeId: 3791,
    variables: `{
  "first": 10,
  "after": null,
  "before": null,
  "last": null
}`,
  },
};

export const quotesTotal: IStory = {
  args: {
    query: `query quotesTotal {
  landedCosts(first: 1) {
    totalCount
  }
}`,
    schemaLabel: 'internal',
    storeId: 3791,
    variables: ``,
  },
};

export const QuotesDetail: IStory = {
  args: {
    query: `query quotesDetail($id: ID!) {
  organization {
    id
    name
    references {
      storeId
    }
  }
  landedCost(id: $id) {
    id
    createdAt
    shipmentRating {
      id
      amount
      currencyCode
      displayName
      serviceLevelCode
      details {
        amount
        carrierCode
        type
      }
      shipFrom {
        line1
        line2
        locality
        administrativeArea
        countryCode
      }
      shipTo {
        countryCode
        locality
      }
    }
    root {
      order {
        id
      }
      parties {
        person {
          firstName
          phone
        }
        location {
          locality # city,town, etc.
          countryCode
        }
        type
      }
      shipmentRatings {
        id
        amount
        currencyCode
        displayName
        serviceLevelCode
        details {
          amount
          carrierCode
          type
        }
        shipFrom {
          line1
          line2
          locality
          administrativeArea
          countryCode
        }
        shipTo {
          countryCode
          locality
        }
      }
      items {
        id
        productId
        amount
        imageUrl
        currencyCode
        description
        hsCode
        sku
        countryOfOrigin
        countryOfOriginSource
        measurements {
          type
          unitOfMeasure
          value
        }
        quantity
        attributes {
          key
          value
        }
      }
      exchangeRates {
        rate
        sourceCurrencyCode
        targetCurrencyCode
      }
    }
    amountSubtotals {
      duties
      taxes
      fees
      landedCostTotal
    }
    duties {
      amount
      currency
      description
      formula
      type
      exchangeRate {
        rate
        sourceCurrencyCode
        targetCurrencyCode
      }
      item {
        id
        description
      }
      note
    }
    fees {
      amount
      currency
      description
      feeType
      formula
      exchangeRate {
        rate
        sourceCurrencyCode
        targetCurrencyCode
      }
      item {
        id
        description
      }
      note
    }
    taxes {
      amount
      currency
      description
      formula
      exchangeRate {
        rate
        sourceCurrencyCode
        targetCurrencyCode
      }
      type
      item {
        id
        description
      }
      note
    }
    deMinimis {
      formula
      method
      note
      threshold
      type
    }
  }
}`,
    schemaLabel: 'internal',
    storeId: 3791,
    variables: `{
  "id": "landed_cost_1de24906-d84a-401e-9c1a-6205a492efcb"
}`,
  },
};
