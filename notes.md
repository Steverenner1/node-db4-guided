# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be use for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## A good data model

- captures all the information the system needs
- captures only the information the system needs
- reflect reality (from the point of view of the system)
- is flexible, can evolve with the system
- guarantees `data integrity` without sacrificing too much performance
- is driven by the way we access data

## Components of a data model

- entities (nouns: zoo, animal, species), like a resource --> tables
- properties --> columns, fields
- relationships --> foreign keys (FK)

## Workflow

- identify entities
- identify relationships
- identify properties

## Mantras

- every table must have a **Primary Key**
- work on **two or three** entities at a time
- **one to many** relationships are modeled using a **foreign key**
- the **foreign key** always goes in the **many** side
