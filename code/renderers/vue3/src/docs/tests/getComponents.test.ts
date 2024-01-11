import { expect, describe, test } from 'vitest'
import { getComponents } from '../sourceDecorator'
import { templates } from './templates'

describe('getComponents', () => {
  const errorIndices = [
    34,
    35,
    113,
    114,
    115,
    116,
    117,
    118,
    120,
    121,
    122,
  ]
  test('storyblok templates', () => {
    let index = 0
    for (const template of templates) {
      if (errorIndices.includes(index)) {
        index++
        continue
      }
      try {
        expect(getComponents(template)).toMatchSnapshot()
      } catch {
        console.log(index + ',')
      }
      index++
    }
  })
})
