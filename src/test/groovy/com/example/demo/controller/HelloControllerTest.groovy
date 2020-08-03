package com.example.demo.controller

import spock.lang.Specification

class HelloControllerTest extends Specification {
    def 'getHello with default'() {
        given: 'controller'
        def controller = new HelloController()

        when: 'request is made'
        def value = controller.getHello(Optional.empty())

        then: 'expect "Hello, world"'
        value == 'Hello, world'
    }

    def 'getHello with custom name'() {
        given: 'controller'
        def controller = new HelloController()

        when: 'request is made'
        def value = controller.getHello(Optional.of('John Doe'))

        then: 'expect "Hello, John Doe"'
        value == 'Hello, John Doe'
    }
}
