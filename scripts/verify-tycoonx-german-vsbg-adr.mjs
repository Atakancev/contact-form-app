#!/usr/bin/env node

// Compatibility alias kept for existing local commands.
// The canonical EU/German consumer ADR verifier now also covers the German
// legal-notice checklist and public notice. Keeping one doctrine source avoids
// duplicated VSBG §§ 36/37, ODR-retirement, product and localization assertions
// drifting independently over time.
import './verify-tycoonx-consumer-adr.mjs';
