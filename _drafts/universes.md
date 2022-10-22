---
layout: post
title: Universes
date: 2022-10-21 14:56 -0700
---

I've been playing with some universe weirdness in Coq.  I was
wondering if I could avoid the need for induction-recursion by using
explicit typing contexts. If Coq had induction-recursion we could
write

```coq
Require Import Coq.Unicode.Utf8.

Inductive U: Set :=
| unit: U
| Σ A (B: El A -> U): U
with El (u: U): Set :=
   match u with
   | unit => Datatypes.unit
   | Σ A B => { a: El A & El (B a) }
   end.
```

But I was wondering if explicit contexts could avoid some need for
this.  One trick I've found is you can use a CPS sort of style to
avoid looking up things in the environment.  Very strange.
Unfortunately this sort of encoding is not really the same thing.

```coq
Require Import Coq.Unicode.Utf8.

Inductive Var: nat → Set :=
| VO {Γ}: Var (S Γ)
| VS {Γ}: Var Γ → Var (S Γ).

Inductive U {Γ}: Set :=
| var (x: Var Γ): U
| unit: U
| Σ (B: @U (S Γ)): U.
Arguments U: clear implicits.

Inductive Env: nat → Set :=
| cons {Γ}: U Γ → Env Γ → Env (S Γ)
| nil: Env 0
.

Inductive Nth: ∀ {Γ}, Env Γ → Var Γ → Set :=
| NO {Γ: nat} {h} {σ: Env Γ}: El σ h → Nth (cons h σ) VO
| NS {Γ: nat} {x: Var Γ} {h: U Γ} {σ: Env Γ}: Nth σ x → Nth (cons h σ) (VS x)
with El: ∀ {Γ}, Env Γ → U Γ → Set :=
| get {Γ} {σ: Env Γ} x: Nth σ x → El σ (var x)
| tt {Γ} {σ: Env Γ}: El σ unit
| existT {Γ} {σ: Env Γ} {B: U (Datatypes.S Γ)} A: El (cons A σ) B → El σ (Σ B).
```
