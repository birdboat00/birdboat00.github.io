# P2P Group Negotiation
<p class="author">bb00 <br> May 31, 2022</p>
<div class="abstract">
  <h2>Abstract</h2>
  <p>Finding a consensus in a group of equal network clients
  is important for a lot of applications like matchmaking,
  autonomous group tasks and other applications that are done
  in a group. An algorithm is needed to negotiate a leader in
  a group of equal subjects.
  </p>
</div>

## Contents
1. [Introduction](#introduction)
1. [Negotiation Method](#negotiation-method)

## Introduction

## Negotiation Method
When the P2P devices arrive on a common communication channel and
begin the group negotiation, they shall stay on that channel until
the group negotiation completes.

Group Negotiation is a three way frame exchange between *n* devices
used to agree which P2P device shall become the group leader and to
agree on characteristics of the P2P group.

**Device 1** and **Device 2** send a [Negotiation Request](#negotiation-request) to each other. The purpose of the request
is to decide a group leader.
To decide the group leader the request contains a random intent value with a value from  0 to the number of negotiating devices.

Both devices compare the intent value they received to their own
intent value. If the their own intent value is bigger than the
received one the device sends a negotiation result to the other 
device which tells the other device that it lost the negotation
and makes it proceeed to slave mode while the winning subject
goes into master mode. The loosing device sends a negotiation
confirmation which confirms that it lost the negotiation and
accepts the other device as master.

If both devices have the same intent value both the negotiation
is repeated until a master is found.

### Negotiation Request
A negotiation request shall contain the following data:
- P2P device info
- P2P capabilities
- group owner intent value
- configuration timeout