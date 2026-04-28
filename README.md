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

React/TypeScript package skeleton is active. It exports `CommunicatorMount`
with local draft/message state until Mainframe messaging contracts exist.

## Develop

```sh
bun install
bun run dev
bun run typecheck
bun run lint
bun run test
bun run build
```

From the Commonwealth root, prefer `bun run dev:communicator` and the root
verification scripts.
