CREATE TABLE producers (
  id UUID PRIMARY KEY,
  name TEXT,
  balance_available INTEGER DEFAULT 0,
  balance_pending INTEGER DEFAULT 0
);

CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  producer_id UUID,
  amount INTEGER,
  status VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW(),
  available_at TIMESTAMP
);

CREATE TABLE withdrawals (
  id UUID PRIMARY KEY,
  producer_id UUID,
  amount INTEGER,
  status VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW()
);
