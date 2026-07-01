import React, { useState } from 'react';
import { 
  Utensils, 
  Volume2, 
  Sparkles, 
  Camera, 
  Tent, 
  Phone 
} from 'lucide-react';
import { senaraiPakej, senaraiAddons, contactInfo } from '../data/landingData';

// Helper to resolve icon names to components
const getAddonIcon = (iconName: string) => {
  switch (iconName) {
    case 'utensils':
      return <Utensils size={18} />;
    case 'volume':
      return <Volume2 size={18} />;
    case 'sparkles':
      return <Sparkles size={18} />;
    case 'camera':
      return <Camera size={18} />;
    case 'tent':
      return <Tent size={18} />;
    default:
      return <Sparkles size={18} />;
  }
};

export const Calculator: React.FC = () => {
  // Calculator States
  const [selectedPackageId, setSelectedPackageId] = useState<string>('eksklusif');
  const [paxCount, setPaxCount] = useState<number>(100);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['audio']);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');

  // Get selected package details
  const selectedPackage = senaraiPakej.find(p => p.id === selectedPackageId) || senaraiPakej[1];

  // Calculate live total price
  const calculateTotal = () => {
    let total = selectedPackage.harga;
    
    selectedAddons.forEach(addonId => {
      const addon = senaraiAddons.find(a => a.id === addonId);
      if (addon) {
        if (addon.isPerPax) {
          total += (addon.harga * paxCount);
        } else {
          total += addon.harga;
        }
      }
    });
    
    return total;
  };

  const handleAddonToggle = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  // Generate and send WhatsApp booking query
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName || !eventDate) {
      alert('Sila isi Nama dan Tarikh Majlis terlebih dahulu.');
      return;
    }

    const formatCurrency = (val: number) => `RM ${val.toLocaleString('ms-MY')}`;
    const totalHarga = calculateTotal();

    let addonText = '';
    selectedAddons.forEach(id => {
      const a = senaraiAddons.find(x => x.id === id);
      if (a) {
        const detailPrice = a.isPerPax ? `${formatCurrency(a.harga)}/pax x ${paxCount} tetamu` : formatCurrency(a.harga);
        addonText += `\n- ${a.nama} (${detailPrice})`;
      }
    });

    if (addonText === '') {
      addonText = '\n- Tiada add-on tambahan';
    }

    const message = 
`Salam admin Villa Astana, saya ingin bertanya tentang ketersediaan slot bagi Villa Astana Event Space.

*Perincian Tempahan:*
• *Nama:* ${customerName}
• *Telefon:* ${customerPhone || 'Tiada'}
• *Tarikh Acara:* ${eventDate}
• *Pakej Dipilih:* ${selectedPackage.nama} (${formatCurrency(selectedPackage.harga)})
• *Bilangan Tetamu:* ${paxCount} orang
• *Tambahan (Add-ons):*${addonText}

----------------------------
*Anggaran Jumlah Harga:* *${formatCurrency(totalHarga)}*
----------------------------

Adakah tarikh tersebut masih kosong? Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contactInfo.telefonRaw}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="pakej" className="section section-alt">
      <div id="kalkulator" className="container">
        <div className="section-header">
          <span className="badge badge-gold">Pakej Fleksibel</span>
          <h2>Kalkulator Harga & Pilihan Pakej</h2>
          <p>Bina pakej impian anda mengikut bajet secara interaktif. Harga dipaparkan adalah anggaran telus tanpa sebarang kos tersembunyi.</p>
        </div>

        <div className="calculator-grid">
          {/* Options Card */}
          <div className="calc-card">
            {/* Step 1: Select Package */}
            <div className="calc-group">
              <span className="calc-label">Langkah 1: Pilih Pakej Utama</span>
              <div className="calc-grid-options">
                {senaraiPakej.map(p => (
                  <button
                    key={p.id}
                    type="button"
                    className={`calc-option-btn ${selectedPackageId === p.id ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedPackageId(p.id);
                      // Reset pax count to not exceed new package limit if it exceeds
                      if (paxCount > p.maxPax) {
                        setPaxCount(p.maxPax);
                      }
                    }}
                  >
                    <span>{p.nama}</span>
                    <span className="calc-option-price">RM {p.harga.toLocaleString('ms-MY')}</span>
                  </button>
                ))}
              </div>
              <p className="mt-sm" style={{ fontSize: '0.85rem', color: 'var(--text-medium)', fontStyle: 'italic' }}>
                * {selectedPackage.deskripsi}
              </p>
            </div>

            {/* Step 2: Customer Details & Guest Range */}
            <div className="calc-group">
              <span className="calc-label">Langkah 2: Butiran Acara & Jumlah Tetamu</span>
              <div className="calc-inputs">
                <div>
                  <label htmlFor="input-name" className="calc-label" style={{ fontSize: '0.8rem', fontWeight: 500 }}>Nama Anda *</label>
                  <input
                    id="input-name"
                    type="text"
                    className="calc-input"
                    placeholder="Contoh: Muhammad Ali"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="input-date" className="calc-label" style={{ fontSize: '0.8rem', fontWeight: 500 }}>Tarikh Majlis *</label>
                  <input
                    id="input-date"
                    type="date"
                    className="calc-input"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="calc-inputs mt-sm">
                <div>
                  <label htmlFor="input-phone" className="calc-label" style={{ fontSize: '0.8rem', fontWeight: 500 }}>Nombor Telefon</label>
                  <input
                    id="input-phone"
                    type="tel"
                    className="calc-input"
                    placeholder="Contoh: 0198765432"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="input-pax" className="calc-label" style={{ fontSize: '0.8rem', fontWeight: 500 }}>Bil. Tetamu ({paxCount} pax)</label>
                  <input
                    id="input-pax"
                    type="range"
                    min="30"
                    max={selectedPackage.maxPax}
                    step="10"
                    className="calc-input"
                    style={{ padding: '0.35rem 0', cursor: 'pointer' }}
                    value={paxCount}
                    onChange={(e) => setPaxCount(parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Add-on services */}
            <div className="calc-group" style={{ marginBottom: 0 }}>
              <span className="calc-label">Langkah 3: Perkhidmatan Tambahan (Add-ons)</span>
              <div className="calc-addons-list">
                {senaraiAddons.map(addon => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      className={`calc-addon-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleAddonToggle(addon.id)}
                    >
                      <input
                        type="checkbox"
                        className="calc-checkbox"
                        checked={isSelected}
                        readOnly
                        aria-label={`Tambah ${addon.nama}`}
                      />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        {getAddonIcon(addon.iconName)}
                        <span className="calc-addon-text">
                          {addon.nama}
                          <span className="calc-addon-price">
                            {addon.isPerPax ? `+RM ${addon.harga}/pax` : `+RM ${addon.harga}`}
                          </span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sebutharga Sticky Summary */}
          <div className="calc-summary">
            <h3 className="summary-title">Rumusan Sebutharga</h3>
            
            <div className="summary-row">
              <span>{selectedPackage.nama}</span>
              <span style={{ fontWeight: 600 }}>RM {selectedPackage.harga.toLocaleString('ms-MY')}</span>
            </div>

            {selectedAddons.map(addonId => {
              const a = senaraiAddons.find(x => x.id === addonId);
              if (!a) return null;
              const cost = a.isPerPax ? (a.harga * paxCount) : a.harga;
              return (
                <div className="summary-row" key={addonId} style={{ fontSize: '0.85rem', color: 'var(--text-medium)' }}>
                  <span>+ {a.nama} {a.isPerPax ? `(x${paxCount})` : ''}</span>
                  <span>RM {cost.toLocaleString('ms-MY')}</span>
                </div>
              );
            })}

            <div className="summary-row total">
              <span>Anggaran Jumlah:</span>
              <span>RM {calculateTotal().toLocaleString('ms-MY')}</span>
            </div>

            <p className="summary-notes">
              * Harga di atas merupakan anggaran awal sahaja. Sila hantar sebutharga ini ke WhatsApp kami untuk pengesahan slot tarikh majlis.
            </p>

            <form onSubmit={handleSendWhatsApp}>
              <button
                type="submit"
                className="btn btn-whatsapp"
                style={{ width: '100%', marginTop: '1.5rem', padding: '1rem' }}
              >
                <Phone size={18} fill="currentColor" /> Hantar Tempahan via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Calculator;
