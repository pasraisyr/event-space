import React, { useState } from 'react';
import { Phone, Calendar, Users, PartyPopper, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../data/landingData';

export const Form: React.FC = () => {
  // Form States
  const [customerName, setCustomerName] = useState<string>('');
  const [eventType, setEventType] = useState<string>('Majlis Perkahwinan & Resepsi Tradisional');
  const [eventDate, setEventDate] = useState<string>('');
  const [paxCount, setPaxCount] = useState<string>('150');
  const [notes, setNotes] = useState<string>('');

  // Handle direct WhatsApp submission to Puan Rozita (019-474 5349)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      alert('Sila masukkan Nama anda.');
      return;
    }

    if (!eventDate) {
      alert('Sila pilih Tarikh Majlis.');
      return;
    }

    if (!paxCount) {
      alert('Sila masukkan anggaran bilangan pax.');
      return;
    }

    // Format tarikh ke bentuk yang kemas (DD/MM/YYYY)
    let tarikhFormatted = eventDate;
    try {
      const [year, month, day] = eventDate.split('-');
      if (year && month && day) {
        tarikhFormatted = `${day}/${month}/${year}`;
      }
    } catch {
      tarikhFormatted = eventDate;
    }

    const message = 
`Salam Puan Rozita, saya ingin membuat pertanyaan tarikh dan tempahan bagi Rumah Seri Harmoni (Tempat Event Wedding Tradisional Melayu • Nusantara).

*Maklumat Majlis:*
• *Nama Tuan Rumah:* ${customerName.trim()}
• *Jenis Event:* ${eventType}
• *Tarikh Majlis:* ${tarikhFormatted}
• *Berapa Pax:* ${paxCount} Pax (Kapasiti: 100 - 250 Pax)
${notes.trim() ? `• *Catatan Tambahan:* ${notes.trim()}\n` : ''}
*Fitur Utama Diminati:*
✓ Pelamin Tradisional Melayu
✓ Dewan Semi Terbuka
✓ Parking Luas & Selamat

Mohon semak sama ada tarikh ini masih ada kekosongan. Terima kasih Puan Rozita!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contactInfo.telefonRaw}?text=${encodedMessage}`;
    
    // Redirect terus ke WhatsApp Puan Rozita
    window.location.href = whatsappUrl;
  };

  return (
    <section id="tempah" className="section section-alt">
      {/* Kept id="kalkulator" as an anchor anchor target for existing links */}
      <div id="kalkulator" className="container">
        <div className="section-header">
          <span className="badge badge-gold">Pertanyaan & Tempahan</span>
          <h2>Borang Semakan Tarikh & Tempahan</h2>
          <p>
            Isi maklumat asas majlis anda di bawah untuk terus berhubung dengan pihak pengurusan bagi semakan kekosongan tarikh dan maklumat lanjut.
          </p>
        </div>

        <div className="booking-form-wrapper">
          <div className="booking-card">
            
            <div className="booking-card-header">
              <div className="officer-badge">
                <span className="officer-name">{contactInfo.pegawai}</span>
                <span className="officer-phone">
                  <Phone size={14} /> {contactInfo.telefon}
                </span>
              </div>
              <p className="booking-helper-text">
                Butiran yang diisi akan dihantar terus ke WhatsApp Puan Rozita secara automatik.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form-grid">
              
              {/* Nama */}
              <div className="form-group">
                <label htmlFor="customerName" className="form-label">
                  <User size={16} /> Nama Penuh / Tuan Rumah *
                </label>
                <input
                  id="customerName"
                  type="text"
                  className="form-input"
                  placeholder="Contoh: Encik Ahmad / Puan Aminah"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>

              {/* Jenis Event */}
              <div className="form-group">
                <label htmlFor="eventType" className="form-label">
                  <PartyPopper size={16} /> Jenis Event *
                </label>
                <select
                  id="eventType"
                  className="form-input"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  required
                >
                  <option value="Majlis Perkahwinan & Resepsi Tradisional">Majlis Perkahwinan & Resepsi Tradisional</option>
                  <option value="Majlis Akad Nikah & Bertunang">Majlis Akad Nikah & Bertunang</option>
                  <option value="Majlis Aqiqah, Berendoi & Kesyukuran">Majlis Aqiqah, Berendoi & Kesyukuran</option>
                  <option value="Jamuan Keluarga / Reunion">Jamuan Keluarga / Reunion</option>
                  <option value="Majlis Korporat Bertema Melayu Tradisi">Majlis Korporat Bertema Melayu Tradisi</option>
                  <option value="Lain-lain Acara">Lain-lain Acara</option>
                </select>
              </div>

              {/* Tarikh Majlis */}
              <div className="form-group">
                <label htmlFor="eventDate" className="form-label">
                  <Calendar size={16} /> Tarikh Majlis *
                </label>
                <input
                  id="eventDate"
                  type="date"
                  className="form-input"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                />
              </div>

              {/* Berapa Pax */}
              <div className="form-group full-width">
                <label htmlFor="paxCount" className="form-label">
                  <Users size={16} /> Berapa Pax (Kapasiti Selesa: 100 - 250 Pax) *
                </label>
                <div className="pax-preset-wrap">
                  {['100', '150', '200', '250'].map(pax => (
                    <button
                      type="button"
                      key={pax}
                      className={`pax-pill-btn ${paxCount === pax ? 'active' : ''}`}
                      onClick={() => setPaxCount(pax)}
                    >
                      {pax} Pax
                    </button>
                  ))}
                  <div className="pax-custom-input">
                    <input
                      id="paxCount"
                      type="number"
                      min="50"
                      max="300"
                      className="form-input"
                      placeholder="Lain-lain jumlah pax"
                      value={paxCount}
                      onChange={(e) => setPaxCount(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Catatan / Mesej Tambahan */}
              <div className="form-group full-width">
                <label htmlFor="notes" className="form-label">
                  <MessageSquare size={16} /> Catatan / Keperluan Khas (Pilihan)
                </label>
                <textarea
                  id="notes"
                  className="form-input form-textarea"
                  rows={3}
                  placeholder="Contoh: Majlis bertemakan adat Minang / memerlukan pelamin petang / lawatan tapak hujung minggu..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              {/* Submit CTA */}
              <div className="form-group full-width mt-sm">
                <button
                  type="submit"
                  className="btn btn-whatsapp-submit"
                >
                  <Phone size={20} fill="currentColor" /> Hantar WhatsApp ke Puan Rozita ({contactInfo.telefon})
                </button>
                <p className="form-privacy-note">
                  * Butiran anda dihantar terus melalui WhatsApp rasmi Puan Rozita tanpa sebarang caj pendaftaran.
                </p>
              </div>

            </form>

            {/* Venue Highlights Summary */}
            <div className="booking-highlights-bar">
              <div className="highlight-item">
                <CheckCircle2 size={16} /> Pelamin Tradisional Melayu
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={16} /> Dewan Semi Terbuka
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={16} /> Kapasiti 100 - 250 Pax
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={16} /> Parking Luas & Selamat
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Form;
