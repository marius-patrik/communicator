# communicator

Communicator is the messaging client for Commonwealth. It connects to
Mainframe and is used by Workspace for desktop/web messaging and by a future
iOS wrapper for phone messaging.

## Source Of Truth

- [PRD.md](./PRD.md) defines the product intent.
- [PLAN.md](./PLAN.md) defines the implementation plan.
- Platform context: [Commonwealth PRD](https://github.com/marius-patrik/commonwealth/blob/main/PRD.md), [PLAN](https://github.com/marius-patrik/commonwealth/blob/main/PLAN.md), [ROADMAP](https://github.com/marius-patrik/commonwealth/blob/main/ROADMAP.md).

## Role In Commonwealth

- Owns messaging UI/client behavior.
- Uses Mainframe for conversations, messages, and participants.
- Exports a React mount component for Workspace.
- Provides the later base for the iOS messaging wrapper.

## Current Status

Documentation-first repo. Web messaging starts after Mainframe exposes the
messaging API.

## Develop

No package scripts are active yet. Planned web stack is React, TypeScript, Bun,
Rsbuild, BiomeJS, and shadcn/ui.
