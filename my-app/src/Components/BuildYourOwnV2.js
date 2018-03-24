import React, {Component} from 'react'
import '../App.css';

export default class buildYourOwnV2 extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render () {
    return (<section className="build">
    <h2>Build Your Own Computer</h2>
    <table>
      <tr>
        <td>Processor:</td>
        <td>
        <select name="processor">
        <option value="" selected>Please Select a Processor</option>
        <option>Intel Core i7 i7-8700 Hexa-core (6 Core) 3.20 GHz Processor - Socket H4 LGA-1151Retail Pack</option>
        <option>AMD Ryzen 5 2400G Processor with Radeon RX Vega 11 Graphics</option>
        <option>AMD RYZEN 7 1800X 3.6 GHz (4.0 GHz Turbo) Socket AM4 95W YD180XBCAEWOF Desktop Processor</option>
        </select>
        </td>
      </tr>

      <tr>
        <td>Motherboard:</td>
        <td>
          <select name="motherboard">
          <option value="" selected>Please Select a Motherboard</option>
          <option>Asus PRIME ATX Motherboard (PRIME B350-PLUS)</option>
          <option>MSI B350 GAMING PLUS AM4 AMD Ryzen DDR4 HDMI USB3 ATX Motherboard</option>
          <option>Asus Prime Z370 ATX LGA1151 Motherboard -(PRIME Z370-A)</option>
        </select>
      </td>
      </tr>

      <tr>
        <td>GPU:</td>
        <td>
          <select name="gPU">
          <option value="" selected>Please Select a GPU</option>
          <option>ASRock H110 Pro BTC+ LGA 1151 GPU Mining Motherboard with 13 PCI-E Slots</option>
          <option>Thermaltake View 71 RGB 4-Sided Tempered Glass Vertical GPU Modular E-ATX Gaming Full Tower PC Case with 3 RGB LED Ring Fans</option>
          <option>ASUS LGA2011-v3 Dual 10G LAN 4-Way GPU ATX/CEB Motherboard (X99-E-10G WS)</option>
          </select>
        </td>
      </tr>

      <tr>
        <td>Storage:</td>
        <td>
          <select name="storage">
          <option value="" selected>Please Select a Storage Device</option>
          <option>Samsung 850 EVO 500GB 520MB/s Internal Solid State Drive</option>
          <option>Kingston SSDNow UV400 240GB 550MB/s SATA Revision 3.0 Solid State Drive</option>
          <option>SAMSUNG 960 EVO M.2 250GB NVMe PCI-Express 3.0 x4 Internal Solid State Drive (SSD) MZ-V6E250BW</option>
          </select>
        </td>
      </tr>

      <tr>
        <td>Power Supply:</td>
        <td>
          <select name="powerSupply">
          <option value="" selected>Please Select a Power Supply</option>
          <option>EVGA 500 W1 ATX12/EPS12V 80+ 500W Power Supply</option>
          <option>Thermaltake TR2 600-Watt ATX Power Supply</option>
          <option>Cooler Master MasterWatt Lite Full Range 600W 80 Plus Power Supply</option>
          </select>
        </td>
      </tr>

      <tr>
        <td>Computer Case:</td>
        <td>
          <select name="computerCase">
          <option value="" selected>Please Select a Computer Case</option>
          <option>Mmnox Mid-Tower Computer Case - Black</option>
          <option>Silver Stone Technologies RL05BB-W ATX Gaming Computer Case - Black with Black Front Cases</option>
          <option>Corsair Carbide Spec-04 Computer Case</option>
          </select>
        </td>
      </tr>

      <tr>
        <td>Monitor:</td>
        <td>
          <select name="monitor">
          <option value="" selected>Please Select a Monitor </option>
          <option>Acer 27" 1080p HD 75Hz 1ms GTG TN LED Gaming Monitor (GF276 Abmipx) - Black</option>
          <option>ASUS 21.5" FHD 1ms GTG TN LED Gaming Monitor (VP228H) - Black</option>
          <option>LG 29" Ultrawide FHD 5ms GTG IPS LED FreeSync Gaming Monitor (29UM59-P.AUS) - Black</option>
          </select>
        </td>
      </tr>

      <tr>
        <td>Keyboard:</td>
        <td>
          <select name="keyboard">
          <option value="" selected>Please Select a Keyboard</option>
          <option>Logitech G810 Orion Spectrum RGB Mechanical Gaming Keyboard</option>
          <option>Microsoft Wireless Desktop 900 BlueTrack Keyboard & Mouse Combo (PT3-00002) - Black - English</option>
          <option>Logitech Touch Plus Wireless Keyboard (K400)</option>
          </select>
        </td>
      </tr>

      <tr>
        <td>Mouse:</td>
        <td>
          <select name="mouse">
          <option value="" selected>Please Select a Mouse</option>
          <option>Logitech G502 Wired Optical Gaming Mouse (910-004615) - Black</option>
          <option>Logitech G502 Tunable FPS Optical Gaming Mouse - Black</option>
          <option>Razer DeathAdder Optical Gaming Mouse</option>
          </select>
        </td>
      </tr>
    </table>
    </section>)
  }
}
